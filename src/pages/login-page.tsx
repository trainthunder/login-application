import LoginForm from "../components/login-page/login-form";

type Props = {};

const LoginPage = ({}: Props) => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center px-[40px] py-[40px]">
      <section className="w-full max-w-lg bg-white border-[1px] border-gray-500 rounded-lg px-[20px] py-[30px] flex flex-col items-center">
        <p className="font-protest-guerrilla text-black text-[24px] md:text-[32px]">
          LOGIN
        </p>
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;
