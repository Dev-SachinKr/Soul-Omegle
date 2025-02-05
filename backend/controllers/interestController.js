
import { saveInterest, getAllInterests } from '../models/interestModel.js';

// Controller to handle saving user interest
export const addInterest = async (req, res) => {
  try {
    const { interest } = req.body;
    const docId = await saveInterest(interest);
    res.status(201).json({ message: 'Interest saved successfully', docId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to handle fetching all interests for matching
export const getInterests = async (req, res) => {
  try {
    const interests = await getAllInterests();
    res.status(200).json(interests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
