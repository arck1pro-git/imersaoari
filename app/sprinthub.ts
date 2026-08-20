/**
 * URLs dos hooks do SprintHub.
 *
 * Antes vinham de `.env` como `NEXT_PUBLIC_*`. O Next grava esse tipo de variável
 * dentro do bundle durante o `next build`: quando ela não existia no ambiente do
 * deploy, o valor virava `undefined` no site publicado e o formulário parava de
 * enviar — sem jeito de corrigir sem refazer o build. Fixadas aqui, o build não
 * depende mais do ambiente.
 *
 * Para trocar um token: edite este arquivo e refaça o deploy.
 *
 * Estes tokens nunca foram secretos — como eram `NEXT_PUBLIC_*`, sempre foram
 * junto no JS que o navegador baixa. A diferença é que agora também ficam no
 * histórico do Git.
 */

/** Hook da LP do evento — usado em `/` e `/a`. */
export const SPRINTHUB_HOOK_EVENTO =
  "https://sprinthub-api-master.sprinthub.app/api/hook/imersao-ari?i=arck1pro&access_token=owPjqua1spWARysioIVmqMd9kTRI8XGIPQVgNjub7vN127050P";

/** Hook das LPs de captação — usado em `/b`, `/c`, `/d` e `/bio`. */
export const SPRINTHUB_HOOK_LPS =
  "https://sprinthub-api-master.sprinthub.app/api/hook/lps?i=arck1pro&access_token=VqW4FiRSQjSNjMvmKXADPpZecltV8LR_AqG1LQ2GZ0rz6ASv7w";
