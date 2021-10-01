import { searchData2 } from './utils';

export default function searchResult(req, res) {
  try {
    res.status(200).json(searchData2);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
}
