import { CircleAlert } from "lucide-react";
import { useParams } from "react-router-dom";

interface Type {
  statusCode: string;
  title: string;
  description: string;
}

function ErrorPage() {
  const { error_http } = useParams<string>();
  const errorTypes: Type[] = [
    {
      statusCode: "400",
      title: "Bad Request",
      description:
        "Your request couldn’t be processed because some of the information sent was invalid or incomplete. Please check your input and try again.",
    },
    {
      statusCode: "401",
      title: "Unauthorized",
      description:
        "You need to be logged in to access this page. Please sign in with your account or create a new one to continue.",
    },
    {
      statusCode: "403",
      title: "Forbidden",
      description:
        "You don’t have permission to access this page or perform this action. Please contact support if you believe this is a mistake.",
    },
    {
      statusCode: "404",
      title: "Page not found",
      description:
        "Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted. Please check the URL or return to the homepage.",
    },
    {
      statusCode: "500",
      title: "Internal Server Error",
      description:
        "Something went wrong on our end. Our technical team has been notified and is working to fix the problem. Please try again later.",
    },
    {
      statusCode: "502",
      title: "Bad Gateway",
      description:
        "The server encountered a temporary issue while processing your request. Please wait a few moments and try again.",
    },
    {
      statusCode: "503",
      title: "Service Unavailable",
      description:
        "Agendify is currently under maintenance or experiencing high traffic. Please try again shortly — we’ll be back soon!",
    },
  ];

  const currentErrorType: Type | undefined = errorTypes.find((errorType) => {
    return errorType.statusCode === error_http;
  });

  return (
    <main className="h-screen w-full flex flex-col justify-start pt-20 items-center gap-10 text-center px-5">
      <div className="bg-blue-100 p-6 rounded-full">
        <CircleAlert size={50} className="text-blue-600" />
      </div>
      <section className="flex flex-col gap-6">
        <h1 className="text-8xl font-bold text-gray-400">
          {currentErrorType !== undefined ? currentErrorType.statusCode : null}
        </h1>
        <h3 className="text-xl font-semibold text-gray-900">
          {currentErrorType !== undefined ? currentErrorType.title : null}
        </h3>
        <p className="text-muted-foreground">
          {currentErrorType !== undefined ? currentErrorType.description : null}
        </p>
      </section>
    </main>
  );
}

export default ErrorPage;
