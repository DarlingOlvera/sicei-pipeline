const request = require('supertest');
const { app } = require('../src/sicei');

jest.mock('../src/getUsers', () => jest.fn(() => [{ alumno: 'Darling Olvera', matricula: '18016378' },{ alumno: 'Axel Diaz', matricula: '18016378' },]));

describe('GET /alumnos', () => {

  test('should return 200 status',async  () => {
    const response = await request(app).get('/alumnos');
    expect(response.status).toBe(200);
  });

  test('should return an array of alumnos', async () => {
    const expected = [{ alumno: 'Darling Olvera', matricula: '18016378' },{ alumno: 'Axel Diaz', matricula: '18016378' },    ];

    const response = await request(app).get('/alumnos');

    expect(response.body).toEqual(expected);
  });
  
});

