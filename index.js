import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// نقطة API الأساسية
app.get('/code', (req, res) => {
  const number = req.query.number;

  // تحقق من وجود الرقم
  if (!number || number.length < 10) {
    return res.status(400).json({ error: 'رقم غير صالح' });
  }

  // توليد كود وهمي (يمكنك ربطه بخدمة حقيقية لاحقًا)
  const generatedCode = `CODE-${Math.floor(100000 + Math.random() * 900000)}`;

  // إعادة الكود
  return res.json({ code: generatedCode });
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
