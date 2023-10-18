export interface IFormSelectAPIFormat {
  type: 'date' | 'time' | 'pokemon' | 'city' | 'region'
  data?: any
  path?: string
}

function FormScheduleSelectApiRequest({type, data, path}:IFormSelectAPIFormat) {
  switch(type){
    case "date":
      return {
        baseService: 'local',
        url: '/scheduling/date',
        method: 'GET',
      } 
  case 'time':
    return {
      baseService: 'local',
      url: '/scheduling/time',
      method: 'POST',
      data: {
        date: data,
      } 
    }
  case 'pokemon':
    return {
      baseService: 'pokeDex',
      url: '/pokemon?limit=1010&offset=0',
      method: 'GET'
    } 
  case 'city':
    return {
      baseService: 'pokeDex',
      url: '/region',
      method: 'GET',
      extendPath: path,
    } 
  case 'region':
    return {
      baseService: 'pokeDex',
      url: '/region',
      method: 'GET'
    } 
  }
}

export default FormScheduleSelectApiRequest