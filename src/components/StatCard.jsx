const StatCard = ({ icon, title, value, iconBg }) => {
  if (!icon) return null;
  const Icon = icon;
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-30 hover:bg-opacity-25 transition-all duration-300 hover:scale-105">
      <div className="flex items-start justify-between mb-4">
        <div className={`${iconBg} bg-opacity-50 p-3 rounded-xl`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
        {value}
      </div>
      <div className="text-blue-800 font-medium">
        {title}
      </div>
    </div>
  );
};
export default StatCard;
