import { memo } from 'react'

type CoupleProps = {
  size?: number
  className?: string
}

function Couple({ size, className }: CoupleProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || '24'}
      height={size || '24'}
      fill='none'
      viewBox='0 0 24 24'
      className={className}
    >
      <path
        fill='currentColor'
        d='M6.577 17.322a.471.471 0 11-.942 0 .471.471 0 01.942 0zM6.577 19.398a.471.471 0 11-.942 0 .471.471 0 01.942 0z'
      />
      <path
        fill='currentColor'
        d='M8.155 14.272v-.085a.36.36 0 00-.266-.346l-.188-.578c.332-.26.624-.595.838-.993a.926.926 0 00.465-.237c.275-.258.433-.706.432-1.228-.001-.565-.215-.868-.431-1.03.374-1.217.306-2.212-.217-2.953-.837-1.19-2.561-1.367-3.515-1.367-.264 0-.461.014-.555.022-.483.044-.738.267-.867.446a1.174 1.174 0 00-.202.719c-.702.533-1.07 1.136-1.097 1.792-.023.608.26 1.12.523 1.462-.163.179-.297.461-.298.91-.001.521.156.969.43 1.226a.918.918 0 00.466.238c.215.4.507.735.838.995l-.188.577a.352.352 0 00-.266.346v.084c-.67.076-1.991.373-2.4 1.527-.48 1.348-.65 4.95-.657 5.103a.359.359 0 00.36.378h9.491c.098 0 .193-.04.26-.113a.359.359 0 00.1-.265c-.007-.153-.177-3.755-.655-5.103-.41-1.154-1.73-1.45-2.401-1.527zm.257.774l.422 1.617H8.14a.36.36 0 00-.357.414l.225 1.533-.47.393v-2.49l.165.044a.358.358 0 00.312-.063.359.359 0 00.14-.286v-1.206c.078.01.165.026.257.044zm-.979-.294v.988l-1.235-.325a.348.348 0 00-.184 0l-1.235.325v-.988l1.175.546a.364.364 0 00.304 0l1.175-.546zm-2.037 1.572l.71-.188.71.188v4.234h-1.42v-4.234zm-1.16-9.217a.365.365 0 00.146-.377c-.014-.067-.033-.266.057-.388.06-.082.176-.131.345-.147.114-.01.284-.02.49-.02.654 0 2.25.104 2.924 1.061.345.49.416 1.163.21 2.006a3.408 3.408 0 00-2.325-.88c-.27 0-.55.03-.833.086a.362.362 0 00-.247.183c-.006.01-.505.916-1.148 1.062-.198-.2-.604-.678-.582-1.232.019-.47.342-.925.963-1.354zm-.107 4.441l-.249.017a.21.21 0 01-.179-.06c-.124-.115-.203-.39-.203-.698 0-.22.043-.339.093-.407.045.02.093.033.143.033h.016c.91-.041 1.564-.935 1.797-1.305.183-.029.363-.044.536-.044 1.469 0 2.153 1.027 2.18 1.07.05.079.13.132.218.153v.003c.063.016.232.058.233.497 0 .308-.08.583-.203.7a.211.211 0 01-.178.058l-.25-.017-.103.227c-.421.924-1.251 1.37-1.85 1.326h-.048c-.601.041-1.429-.402-1.85-1.326l-.103-.227zm1.87 2.277c.037 0 .072 0 .107-.002.321.015.647-.054.959-.184l.138.425-1.097.51-1.097-.51.138-.423c.277.116.565.184.853.184zm-1.8 2.669a.36.36 0 00.311.063l.165-.044v2.49l-.47-.393.224-1.534a.361.361 0 00-.356-.413h-.694l.423-1.62c.091-.018.177-.033.256-.043v1.209a.36.36 0 00.14.285zm-1.862-.454c.115-.326.36-.553.644-.712l-.418 1.605a.36.36 0 00.349.452h.744l-.194 1.32a.36.36 0 00.126.33l1.088.908v.615H1.742c.057-.964.237-3.51.595-4.518zm5.2 4.518v-.615l1.088-.909a.36.36 0 00.126-.328l-.194-1.321h.744a.36.36 0 00.35-.451l-.418-1.6c.284.158.529.383.643.706.357 1.008.538 3.554.595 4.518H7.537zM22.344 15.799a1.964 1.964 0 00-.769-.972c-.757-.889-.825-2.294-.824-2.77.021-.018.046-.03.067-.05.26-.26.407-.699.406-1.202V9.267c0-2.71-2.178-3.425-3.33-3.425-1.15 0-3.329.716-3.329 3.425v1.538c0 .503.147.941.407 1.202.02.02.046.032.068.05 0 .475-.065 1.877-.825 2.77-.33.225-.615.536-.77.97-.478 1.35-.648 4.952-.655 5.104a.36.36 0 00.36.377h9.49A.361.361 0 0023 20.9c-.008-.15-.178-3.753-.656-5.102zm-6.7-4.234a.212.212 0 01-.163-.068c-.121-.121-.196-.386-.195-.691 0-.348.106-.446.182-.48 1.126.109 2.001-.548 2.426-.955.425.407 1.298 1.063 2.426.954.076.035.182.133.183.48 0 .306-.074.571-.196.692-.047.049-.102.068-.186.068a.367.367 0 00-.353.21c-.436.957-1.273 1.362-1.85 1.326h-.047c-.578.04-1.414-.369-1.85-1.327a.39.39 0 00-.377-.209zm1.292 2.074c.311.13.637.199.958.183l.105.003c.29 0 .578-.068.855-.184l.3.922c-.55.905-1.222.91-1.27.91-.042-.01-.7-.007-1.249-.91l.3-.924zm2.877.62l-.323-.993c.209-.164.4-.358.567-.581.044.474.153 1.087.403 1.676a4.705 4.705 0 00-.647-.103zm-.343-7.205c-.487.175-1.134.37-1.576.37-.44 0-1.088-.195-1.575-.37.702-.48 1.515-.49 1.575-.49.06 0 .873.01 1.576.49zm-3.715.558c.464.184 1.44.533 2.14.533.7 0 1.674-.35 2.139-.533.276.39.468.92.468 1.655v.36c-.02-.006-.042-.014-.06-.018a.38.38 0 00-.132-.008c-1.23.157-2.124-.97-2.132-.98a.361.361 0 00-.568 0c-.008.011-.897 1.138-2.132.98a.38.38 0 00-.132.008c-.018.004-.04.012-.06.018v-.36c0-.735.192-1.265.469-1.655zm-.024 5.072c.168.222.36.415.568.579l-.323.995a4.729 4.729 0 00-.648.103c.25-.59.36-1.203.403-1.677zm-1.606 3.355c.298-.84 1.451-1.023 1.918-1.062.728 1.165 1.683 1.217 1.82 1.217h.038c.161 0 1.117-.052 1.845-1.217.467.04 1.62.222 1.918 1.062.166.467.293 1.265.388 2.082h-.592a3.305 3.305 0 00-.276-.958.368.368 0 00-.083-.11c-1.129-1.012-2.483-.611-3.207-.168-.724-.443-2.077-.844-3.207.168a.356.356 0 00-.083.11c-.013.026-.211.44-.275.958h-.592c.095-.817.222-1.615.388-2.082zm6.575 2.768c-.23.654-.322 1.036-.333 1.75h-4.945c-.01-.713-.102-1.096-.334-1.75-.15-.43.027-1.009.136-1.265 1.11-.927 2.397.025 2.451.066a.363.363 0 00.437 0c.055-.04 1.343-.992 2.452-.065.11.256.287.834.136 1.264zm-7.039.035h.692c.014.07.032.138.056.205.209.593.283.895.292 1.51h-1.17a50.59 50.59 0 01.13-1.715zm7.428 1.716c.008-.615.082-.918.292-1.51.023-.069.04-.137.055-.206h.692c.065.692.108 1.33.13 1.716h-1.17zM12.855 3c-.34 0-.645.149-.855.385a1.145 1.145 0 00-2 .76c0 .71.857 1.405 1.303 1.75.289.223.697.488.697.488s.408-.265.697-.488C13.143 5.55 14 4.855 14 4.145 14 3.512 13.488 3 12.855 3z'
      />
    </svg>
  )
}

export default memo(Couple)