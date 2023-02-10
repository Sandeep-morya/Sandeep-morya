export const root = document.querySelector("html");

// Real cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
root?.appendChild(cursor);

// Following extra cursor element
const follower = document.createElement("div");
follower.classList.add("cursor", "follower");
root?.appendChild(follower);

root?.addEventListener("mousemove", (e) => {
	cursor.style.transform = `translate3d(${e.pageX - 10}px, ${e.pageY}px, 0)`;
	follower.style.transform = `translate3d(${e.pageX - 10}px, ${e.pageY}px, 0)`;
});
