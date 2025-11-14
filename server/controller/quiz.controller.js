export const createQuiz = async (req, res) => {
  const { quizTitle, subTitle, description, questions } = req.body;

  try {
    const newQuiz = new Quiz({
      quizTitle,
      subTitle,
      description,
      questions,
      creator: req.user._id
    });

    await newQuiz.save();
    res.status(201).json({ message: "Quiz created successfully", quiz: newQuiz });
  } catch (error) {
    res.status(500).json({ message: "Error creating quiz", error });
  }
};
