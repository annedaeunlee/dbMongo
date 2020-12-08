const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (questionId) => questionsModel.findById(questionId)
const findQuestionsForQuiz = (qzid) => quizzesModel.findAllQuestions(qzid)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }