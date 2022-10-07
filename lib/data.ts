type StoryType = {
  id: number
  title: string
  subtitle: string
  content: string
  extraContent?: string
}

export const story: StoryType[] = [
  {
    id: 1,
    title: 'Nos conocimos',
    subtitle: 'Nuestra historia comienza hace 10 años atrás',
    content:
      'Aunque realmente comenzó muchos antes (pregúntenle a nuestros padres).'
  },
  {
    id: 2,
    title: 'Nos enamoramos',
    subtitle: 'Vivimos juntos hace 7 años',
    content:
      'Dicen que para casarse hay que conocerse bien... ¡Creemos que es tiempo suficiente!. (jaja)'
  },
  {
    id: 3,
    title: 'Nos comprometimos',
    subtitle: '¡Dijimos que si!',
    content:
      'Para nosotros este paso es una decisión de pareja más allá de una propuesta.',
    extraContent: 'Nos elegimos para siempre.'
  },
  {
    id: 4,
    title: 'Matrimonio',
    subtitle: '¡Nos casamos!',
    content:
      'Y lo único que queremos es disfrutar con ustedes de este gran día.'
  }
]
