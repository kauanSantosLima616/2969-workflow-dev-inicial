import Evento from '../models/evento.js';

class EventoController {
  static listarEventos = async (req, res) => {
    try {
      const resultado = await Evento.pegaEvento();
      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default EventoController;
