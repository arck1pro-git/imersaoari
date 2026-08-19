import { notFound } from "next/navigation";

/**
 * A LP do evento saiu do ar e a raiz não serve mais nada — o arquivo estava vazio,
 * o que quebrava o type check do build ("File 'app/page.tsx' is not a module").
 * O conteúdo antigo continua no commit 73b7b8e, caso precise voltar.
 */
export default function Home() {
  notFound();
}
