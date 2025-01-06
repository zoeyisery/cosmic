import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import productRoutes from "@/app/api/posts/route"; // 라우트 설정 파일

const app = express();
const PORT = 5001;

// MongoDB 연결 설정
mongoose
  .connect("mongodb://localhost:27017/cosmic")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// 미들웨어 설정
app.use(bodyParser.json()); // 요청 본문을 JSON 형식으로 파싱

// 라우트 설정
app.use("/api/posts", productRoutes); // 제품 관련 API 라우팅

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
