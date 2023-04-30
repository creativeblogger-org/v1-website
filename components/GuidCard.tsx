import Link from "next/link";

const GuideCard = (props: any) => {
  const { title } = props;
  const { route } = props;
  return (
    <center>
      <Link href={route}>
        <div className="border-2 w-1/3 p-8 bg-slate-800 rounded-md">
          <h2 className="text-center text-yellow-500">{title}</h2>
        </div>
      </Link>
    </center>
  );
};

export default GuideCard;
