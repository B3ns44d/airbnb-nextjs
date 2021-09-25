import { getaways } from './utils';

export default function futureGetaways(req, res) {
  try {
    res.status(200).json(getaways);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
}
