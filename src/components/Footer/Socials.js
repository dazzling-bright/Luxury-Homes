const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-1 border border-black rounded-full text-black"
  >
    <Icon className="w-6 h-6" />
  </a>
);

export default SocialIcon;
