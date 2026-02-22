export default function Article({ title, children }) {
  console.log(children);
  return (
    <article className="rounded-2xl border border-green-800 p-5 w-[25vw] shadow-lg shadow-green-950">
      <h3 className="text-green-900 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-green-100/70 text-sm leading-relaxed">{children}</p>
    </article>
  );
}
