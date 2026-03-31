export type ApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};

export type PaginatedResponse<T> = ApiResponse<T> & {
  meta: {
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
  };
};

export type UserRole = "admin" | "operator" | "customer";

export type LoadingState = "idle" | "loading" | "success" | "error";
