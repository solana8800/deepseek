import { RiBookOpenLine } from '@remixicon/react'
import { useTranslation } from 'react-i18next'

const InfoPanel = () => {
  const { t } = useTranslation()

  return (
    <div className='flex w-[360px] pt-[108px] pb-2 pr-8 flex-col items-start'>
      <div className='flex min-w-[240px] w-full p-6 flex-col items-start gap-3 self-stretch rounded-xl bg-background-section'>
        <div className='flex p-1 w-10 h-10 justify-center items-center gap-2 grow self-stretch rounded-lg border-[0.5px] border-components-card-border bg-components-card-bg'>
          <RiBookOpenLine className='w-5 h-5 text-text-accent' />
        </div>
        <p className='flex flex-col items-start gap-2 self-stretch'>
          <span className='self-stretch text-text-secondary system-xl-semibold'>
            {t('dataset.connectDatasetIntro.title')}
          </span>
          <span className='text-text-tertiary system-sm-regular'>
            {t('dataset.connectDatasetIntro.content.front')}
            {t('dataset.connectDatasetIntro.content.end')}
          </span>
        </p>
      </div>
    </div>
  )
}

export default InfoPanel
