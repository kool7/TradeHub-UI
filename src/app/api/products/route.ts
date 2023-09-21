import { API } from "@/app/constants/api";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const res = await fetch(API.URL.GetProducts);
    const data = await res.json();
    return NextResponse.json(
      { message: API.Response.SUCCESS, data: data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: API.Response.ERROR }, { status: 500 });
  }
};
