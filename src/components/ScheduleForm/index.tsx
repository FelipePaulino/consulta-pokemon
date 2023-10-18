import * as S from "./styles";
import { useCallback, useEffect, useState } from "react";
import Button from "..//Button";
import Input from "../Input";
import Container from "../Container";
import ScheduleFormCheckout from "./ScheduleFormResult";
import Select from "../Select";
import { scheduleSchema } from "./schema";
import { formatCurrency } from "../../utils/formatCurrency";
import FormScheduleSelectApiRequest, {
  IFormSelectAPIFormat,
} from "../../services/ScheduleForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import generationIdentify from "../../utils/generationIdentify";

type FormData = z.infer<typeof scheduleSchema>;

interface IScheduleFormProps {
  submitScheduleForm: (data: FormData) => void;
}

interface IFormSelectOptions {
  value: string;
  label: string;
}

const ScheduleForm = ({ submitScheduleForm }: IScheduleFormProps) => {
  const {
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(scheduleSchema),
  });

  const [pokemonList, setPokemonList] = useState<string[] | []>([""]);
  const [pokemonsSelected, setPokemonsSelected] = useState<any>([]);
  const [regions, setRegions] = useState<IFormSelectOptions[]>([]);
  const [city, setCity] = useState<IFormSelectOptions[]>([]);
  const [date, setDate] = useState<IFormSelectOptions[]>([]);
  const [time, setTime] = useState<IFormSelectOptions[]>([]);
  const [pokemon, setPokemon] = useState<IFormSelectOptions[]>([]);
  const [selectRequestCity, setSelectRequestCity] = useState("");
  const [generationMajor, setGenerationMajor] = useState<any>();

  const handleAddPokemon = useCallback(() => {
    if (pokemonList.length === 6) return;
    setPokemonList((prev) => [...prev, ""]);
  }, [pokemonList]);

  async function getSelectRequestOptions({ type, path }: IFormSelectAPIFormat) {
    const makeHttpCall = (await import("../../utils/makeCall")).default;
    try {
      const regionResponse = await makeHttpCall(
        FormScheduleSelectApiRequest({ type, path })
      );
      if (regionResponse.status === 200) {
        switch (type) {
          case "region":
            setRegions(
              regionResponse.data.results.map((option: any) => ({
                value: option.name,
                label: option.name,
              }))
            );
            break;
          case "city":
            setCity(
              regionResponse.data.locations.map((option: any) => ({
                value: option.name,
                label: option.name,
              }))
            );
            break;
          case "date":
            setDate(
              regionResponse.data.map((option: any) => ({
                value: option,
                label: option,
              }))
            );
            break;
          case "time":
            setTime(
              regionResponse.data.map((option: any) => ({
                value: option,
                label: option,
              }))
            );
            break;
          case "pokemon":
            setPokemon(
              regionResponse.data.results.map((option: any, index: any) => ({
                value: option.name,
                label: option.name,
                number: index + 1,
              }))
            );
            break;
        }
      }
    } catch (e) {
      console.log(e);
    }
  }


  function addPokemonFormState(pokemonName: string, index: number) {
    const onlyOrders = pokemonsSelected.map((pokemon: any) => pokemon.order);
    const pokeSelected: any = pokemon.filter((item) => {
      return pokemonName === item.value;
    });

    if (onlyOrders.includes(index)) {
      const noRepeat = pokemonsSelected.filter((pokemon: any) => {
        return pokemon.order !== index;
      });
      setPokemonsSelected([
        ...noRepeat,
        {
          pokemon: pokemonName,
          order: index,
          generation: generationIdentify(pokeSelected[0]?.number),
        },
      ]);
      setValue("pokemons", [
        ...noRepeat.map((pokemon: any) => pokemon.pokemon),
        pokemonName,
      ]);
    } else {
      setPokemonsSelected([
        ...pokemonsSelected,
        {
          pokemon: pokemonName,
          order: index,
          generation: generationIdentify(pokeSelected[0]?.number),
        },
      ]);
      setValue("pokemons", [
        ...pokemonsSelected.map((pokemon: any) => pokemon.pokemon),
        pokemonName,
      ]);
    }
  }

  useEffect(() => {
    if (pokemonsSelected.length > 0) {
      const majorGenerationSquad = pokemonsSelected.reduce((prev: any, current:any) => {
        return prev.generation > current.generation ? prev : current;
      });

      setGenerationMajor(majorGenerationSquad.generation * 3);
    }
  }, [pokemonsSelected]);

  useEffect(() => {
    getSelectRequestOptions({ type: "region" }).then(() => {
      getSelectRequestOptions({ type: "city", path: selectRequestCity });
    });
    getSelectRequestOptions({ type: "pokemon" });
    getSelectRequestOptions({ type: "date" });
    getSelectRequestOptions({ type: "time" });
  }, []);

  const calTax = () =>{
    return generationMajor
      ? formatCurrency(
  
            ((70 * pokemonsSelected.length) / 100) * generationMajor)
      : "0,00"
  }

  return (
    <Container stylepattern="white">
      <S.FormTitle>
        Preencha o formulário abaixo para agendar sua consulta
      </S.FormTitle>
      <S.FormContainer>
        <S.FormWrapper onSubmit={handleSubmit(submitScheduleForm)}>
          <S.FormRow>
            <Input
              onChange={(e) => setValue("nome", e.target.value)}
              onChangeCapture={() => clearErrors("nome")}
              error={errors?.nome && "Nome é obrigatório"}
              label="Nome"
              type="text"
              placeholder="Digite seu nome"
            />
            <Input
              onChangeCapture={() => clearErrors("sobrenome")}
              onChange={(e) => setValue("sobrenome", e.target.value)}
              error={errors?.sobrenome && "Sobrenome é obrigatório"}
              label="Sobrenome"
              type="text"
              placeholder="Digite seu sobrenome"
            />
          </S.FormRow>
          <S.FormRow>
            <Select
              label="Região"
              error={errors?.region && "Região é obrigatória"}
              onChangeCapture={() => clearErrors("region")}
              onChange={(e) => {
                setValue("region", e.target.value);
                setSelectRequestCity(e.target.value);
              }}
            >
              {regions.map((option: any) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            <Select
              label="Cidade"
              error={errors?.region && "Cidade é obrigatória"}
              disabled={selectRequestCity === ""}
              onChangeCapture={() => clearErrors("city")}
              onChange={(e) => setValue("city", e.target.value)}
              onClick={async () =>
                await getSelectRequestOptions({
                  type: "city",
                  path: selectRequestCity,
                })
              }
            >
              {city.map((option: any) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </S.FormRow>
          <S.FwyForm>
            <S.FormLabel>Cadastre seu time</S.FormLabel>
            <S.InfoSpan>Atendemos até 06 pokémons por vez</S.InfoSpan>

            <S.FormRow>
              {pokemonList.map((e, index) => (
                <Select
                  key={e + index}
                  error={errors?.pokemons && "Escolha um pokemon!"}
                  name={`pokemon-${index}}`}
                  direction="row"
                  label={`Pokemón ${index + 1}`}
                  onChange={(e) => addPokemonFormState(e.target.value, index)}
                >
                  {pokemon.map((option: any) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              ))}
            </S.FormRow>
            {pokemonList.length !== 6 && (
              <Button
                disabled={pokemonList.length === 6}
                stylepattern="secondary"
                type="button"
                onClick={handleAddPokemon}
              >
                Adicionar novo pokémon ao time... +
              </Button>
            )}
          </S.FwyForm>
          <S.ScheduleTimeFormRow>
            <Select
              label="Data para Atendimento"
              error={errors?.date && "Data é obrigatória"}
              onChangeCapture={() => clearErrors("date")}
              onChange={(e) => setValue("date", e.target.value)}
            >
              {date.map((option: any) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            <Select
              label="Horário de Atendimento"
              error={errors?.date && "Horario é obrigatório"}
              onChangeCapture={() => clearErrors("time")}
              onChange={(e) => setValue("time", e.target.value)}
            >
              {time.map((option: any) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </S.ScheduleTimeFormRow>
          <S.Hr />
     
          <ScheduleFormCheckout pokemons={pokemonsSelected} calTax={calTax()} />
          <S.SubmitFormRow>
            <S.InfoValue>
              Valor Total:{" "}
              {generationMajor
                ? formatCurrency(
                    70 * pokemonsSelected.length +
                      ((70 * pokemonsSelected.length) / 100) * generationMajor)
                : "0,00"}
            </S.InfoValue>
            <Button stylepattern="primary" type="submit">
              Concluir Agendamento
            </Button>
          </S.SubmitFormRow>
        </S.FormWrapper>
      </S.FormContainer>
    </Container>
  );
};

export default ScheduleForm;
