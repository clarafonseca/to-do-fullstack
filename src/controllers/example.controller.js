module.exports = {
  example: async (req, res) => {
    try {
      return res.status(200).send(req.body)
    } catch (error) {
      console.error(error)
      return res.status(500).json(error.message)
    }
  }
}
