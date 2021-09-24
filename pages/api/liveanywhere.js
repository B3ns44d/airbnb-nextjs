import { homes } from './utils';

export default function liveAnywhere(req, res) {
  try {
    res.status(200).json(homes);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
}
