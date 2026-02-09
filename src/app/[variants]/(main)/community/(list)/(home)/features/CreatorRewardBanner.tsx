'use client';

import { Button, Flexbox } from '@lobehub/ui';
import { createStaticStyles, responsive } from 'antd-style';
import { memo } from 'react';

const styles = createStaticStyles(({ css }) => ({
  banner: css`
    position: relative;
    width: 100%;
    padding: 24px 32px;
    border-radius: 12px;
    background: linear-gradient(135deg, #fceabb 0%, #f8b500 50%, #e88a20 100%);

    ${responsive.sm} {
      padding: 16px 20px;
    }
  `,
  subtitle: css`
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);

    ${responsive.sm} {
      font-size: 12px;
    }
  `,
  symbols: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    width: 50%;
    border-radius: 0 12px 12px 0;
    background: url('/images/banner_creator.png') right center / contain no-repeat;
    pointer-events: none;

    ${responsive.sm} {
      display: none;
    }
  `,
  title: css`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;
    color: rgba(0, 0, 0, 0.88);

    ${responsive.sm} {
      font-size: 18px;
    }
  `,
}));

const CreatorRewardBanner = memo(() => {
  return (
    <Flexbox className={styles.banner} width={'100%'}>
      <Flexbox gap={8} style={{ position: 'relative', zIndex: 1 }}>
        <h2 className={styles.title}>Create. Share. Get Paid.</h2>
        <p className={styles.subtitle}>2026 Creator Reward Program is officially live.</p>
        <div>
          <a href={'#'} rel={'noopener noreferrer'} target={'_blank'}>
            <Button type={'primary'}>Apply Now</Button>
          </a>
        </div>
      </Flexbox>
      <div className={styles.symbols} />
    </Flexbox>
  );
});

export default CreatorRewardBanner;
