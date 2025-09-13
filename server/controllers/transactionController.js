exports.initiatePayment = async (req, res) => {
  const { phone, amount } = req.body;

  // Simulate sending payment request to M-Pesa gateway
  try {
    // Replace with actual API call to Pesapal, Flutterwave, or DPO
    console.log(`Initiating payment of KSh ${amount} to ${phone}`);
    res.status(200).json({ message: "Payment request sent", phone, amount });
  } catch (error) {
    res.status(500).json({ message: "Payment failed", error });
  }
};

exports.verifyPayment = async (req, res) => {
  const { transactionId } = req.body;

  // Simulate verification logic
  try {
    // Replace with actual verification API call
    console.log(`Verifying transaction ${transactionId}`);
    res.status(200).json({ message: "Payment verified", transactionId });
  } catch (error) {
    res.status(500).json({ message: "Verification failed", error });
  }
};
