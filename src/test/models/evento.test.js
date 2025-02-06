import { describe, it, expect } from '@jest/globals';
import Evento from '../../models/evento';

describe('Testando modelo Evento', () => {
  const objetoEvento = {
    nome: 'Evento teste',
    descricao: 'descricao do evento teste',
    data: '2023-01-01',
    autor_id: 1,
  };

  it('Deve instanciar um novo Evento', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(
      expect.objectContaining(objetoEvento),
    );
  });
});
