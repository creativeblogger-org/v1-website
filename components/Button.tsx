const Button = (props: any) => {
  const { type } = props;
  const { title } = props;
  return (
    <button
      className="bg-yellow-500 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full duration-500"
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
