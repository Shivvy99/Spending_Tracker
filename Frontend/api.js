export async function getHello() {
  const res = await fetch("http://localhost:5000");
  return await res.text();
}
