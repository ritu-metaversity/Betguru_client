interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface LoginRequestBody {
  userId: string;
  password: string;
  url:string;
}

interface LoginResponse {
  token: string;
  userId:string;
  userTypeInfo: number | string;
  status?:boolean;
  message?:string
}
