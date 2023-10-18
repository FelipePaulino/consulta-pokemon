import axios from 'axios';
import makeHttpCall, { IMakeCall } from '.';

jest.mock('axios');

describe('makeHttpCall', () => {
  const mockAxios = axios as jest.Mocked<typeof axios>;

  it('should make a GET request successfully', async () => {
    const mockResponse = { data: 'some data' };
    mockAxios.request.mockResolvedValueOnce(mockResponse);

    const request: IMakeCall<'local'> = {
      baseService: 'local',
      url: '/scheduling/date',
      method: 'GET',
    };

    const response = await makeHttpCall(request);

    expect(mockAxios.request).toHaveBeenCalledWith({
      url: expect.stringContaining('/scheduling/date'),
      method: 'GET',
      data: undefined,
    });
    expect(response).toEqual(mockResponse);
  });

  it('should handle errors during the request', async () => {
    const mockError = new Error('An error occurred');
    mockAxios.request.mockRejectedValueOnce(mockError);

    const request: IMakeCall<'pokeDex'> = {
      baseService: 'pokeDex',
      url: '/pokemon',
      method: 'GET',
    };

    await expect(makeHttpCall(request)).rejects.toThrow(mockError);
  });
});
