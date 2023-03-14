import { WORLDS_WISDOM_CORE } from "../constants";

const axios = require("axios").default;

// get all the categories in the database
// parameter: none
// return: list of category 
export const getCategories = async () => {
  try {
    const { data } = await axios.get(
      `${WORLDS_WISDOM_CORE[process.env.NODE_ENV].URL}/api/v0/category/getAllCategories`
    );
    return data;
  } catch (error) {
    throw error;
  }
}

// post user data to the database
// parameter:   
  // firstName,
  // lastName,
  // userName,
  // userId,
  // email,
  // birthday,
  // occupations,
  // chosenCategories
// return: 
  // firstName,
  // lastName,
  // userName,
  // userId,
  // email,
  // birthday,
  // occupations,
  // chosenCategories
export const postUserData = async (
  firstName,
  lastName,
  userName,
  userId,
  email,
  birthday,
  occupations,
  chosenCategories
) => {
  try {
    const { data } = await axios.post(
      `${WORLDS_WISDOM_CORE[process.env.NODE_ENV].URL}/api/v0/user/register`,
      { firstName, lastName, userName, userId, email, birthday, occupations, chosenCategories }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

// get user data from the database
// parameter: userId
// return:
// firstName,
// lastName,
// userName,
// userId,
// email,
// birthday,
// occupations,
// chosenCategories 
export const getUserData = async ( 
  userId 
  ) => {
  try {
    const { data } = await axios.post(
      `${WORLDS_WISDOM_CORE[process.env.NODE_ENV].URL}/api/v0/user/getUser`, {userId}
    );
    return data;
  } catch (error) {
    throw error;
  }
}

// get all the questions in a specific category
// parameter: categoryName
// return: 
// array of question object:
// { userId, videoKeys, questionText, categories, dataPosted}
export const getCategoryQuestions = async (
  categoryName
) => {
  try {
    const { data } = await axios.get(
      `${WORLDS_WISDOM_CORE[process.env.NODE_ENV].URL}/api/v0/question/getCategoryQuestions/${categoryName}`
    );
    return data;
  } catch (error) {
    throw error;
  }
}

// parameters: 
  // userId, 
  // questionText,
  // categories
// return:
// question object
export const postQuestion = async (
  userId, 
  questionText,
  categories
  ) => {
  try {
    const { data } = await axios.post(
      `${WORLDS_WISDOM_CORE[process.env.NODE_ENV].URL}/api/v0/question/postQuestion`,
      { userId, questionText, categories }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

// parameter: none
// return:
// array of question object:
// { userId, videoKeys, questionText, categories, dataPosted}
export const getPopularQuestions = async () => {
  try {
    const { data } = await axios.get(
      `${WORLDS_WISDOM_CORE[process.env.NODE_ENV].URL}/api/v0/question/getPopularQuestions`
    );
    return data;
  } catch (error) {
    throw error;
  }
}

// parameter: videoKey
// return: 
// array object: {answer, user}
export const getAnswer = async (
  videokey
) => {
  try {
    const { data } = await axios.get(
      `${ANIMAL_SPLIT_CORE[process.env.NODE_ENV].URL}/api/v0/answer/${videoKey}`
    );
    return data;
  } catch (error) {
    throw error;
  }
}

// parameter: none
// return:
// list of question object: 
// { userId, videoKeys, questionText, categories, dataPosted}
export const getRecentlyAnsweredQuestions = async () => {
    try {
    const { data } = await axios.get(
      `${WORLDS_WISDOM_CORE[process.env.NODE_ENV].URL}/api/v0/question/getRecentlyAnsweredQuestions`
    );
    return data;
  } catch (error) {
    throw error;
  }
}

// parameter: 
  // questionId,
  // videoKey,
  // userId,
  // description
// return: answer object
export const postAnswer = async (
  questionId,
  videoKey,
  userId,
  description
  ) => {
  try {
    const { data } = await axios.post(
      `${WORLDS_WISDOM_CORE[process.env.NODE_ENV].URL}/api/v0/answer/postAnswer`,
      { questionId, videoKey, userId, description }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

// parameter: none
// return: 
// list of question object
export const search = async () => {
  try {
    const { data } = await axios.get(
      `${WORLDS_WISDOM_CORE[process.env.NODE_ENV].URL}/api/v0/search`,
    );
    return data;
  } catch (error) {
    throw error;
  }
}

// parameter: questionId
// return: 
// question object
export const getQuestion = async(
  questionId
) => {
  try {
    const { data } = await axios.get(
      `${WORLDS_WISDOM_CORE[process.env.NODE_ENV].URL}/api/v0/question/getQuestion/${questionId}`,
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export const getHelloWorld = async () => {
  try {
    const { data } = await axios.get(
      `${ANIMAL_SPLIT_CORE[process.env.NODE_ENV].URL}/api/v0/hello`
    );
    return data;
  } catch (error) {
    throw error;
  }
};