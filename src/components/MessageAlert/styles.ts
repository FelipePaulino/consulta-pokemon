import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 254px auto;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border:1px solid #DF8686;
  border-radius: 8px;
  width: 408px;
  height: 245px;
  padding: 20px 19px;
  background-color: #DF86860A;
`

export const WarningTitle = styled.h1`
  text-align: center;
  font-size: 20px;
  color:#1D1D1D;
`

export const WarningText = styled.p`
  font-size: 14px;
  text-align: center;
  color:#747474;
`