import { discover } from './utils';

export default function discoverNewThings(req, res) {
  try {
    res.status(200).json(discover);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
}
