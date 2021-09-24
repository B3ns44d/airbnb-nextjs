import { places } from './utils';

export default function nearbyPlaces(req, res) {
  try {
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
}
