import axios, { AxiosResponse  } from 'axios';


function getBaseUrl(baseService: any) {
  switch (baseService) {
    case 'local':
      return '/api'
    case 'pokeDex':
      return 'https://pokeapi.co/api/v2'
  }
}



async function makeHttpCall({
  baseService,
  url,
  method,
  data,
  extendPath
}: any): Promise<AxiosResponse> {
  const baseUrl = getBaseUrl(baseService)
  const fullUrl = `${baseUrl}${url}${extendPath ? `/${extendPath}`: ''}`;

  try {
    const response = await axios.request({
      url: fullUrl,
      method,
      data,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export default makeHttpCall;