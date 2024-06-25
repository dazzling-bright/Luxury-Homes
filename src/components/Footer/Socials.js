const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border border-black rounded-full text-black inline-flex items-center justify-center"
  >
    <Icon className="w-6 h-6" />
  </a>
);

export default SocialIcon;
