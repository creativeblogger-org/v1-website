const AboutCard = (props: any) => {
  const { img } = props;
  const { alt } = props;
  const { name } = props;
  const { bio } = props;
  return (
    <center>
      <div className="border-slate-400 bg-slate-800 border-2 w-1/3 p-8 rounded-md">
        <img src={img} alt={alt} />
        <h2 className="text-yellow-500 text-2xl">{name}</h2>
        <p className="text-white text-xl">{bio}</p>
      </div>
    </center>
  );
};

export default AboutCard;
