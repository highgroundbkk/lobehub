'use client';

import { ActionIcon } from '@lobehub/ui';
import { Input } from 'antd';
import { useDebounce } from 'ahooks';
import { SearchIcon, XIcon } from 'lucide-react';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useResourceManagerStore } from '@/app/[variants]/(main)/resource/features/store';

const SearchInput = memo(() => {
  const { t } = useTranslation('components');
  const [expanded, setExpanded] = useState(false);
  const [localQuery, setLocalQuery] = useState('');
  const inputRef = useRef<any>(null);
  const setSearchQuery = useResourceManagerStore((s) => s.setSearchQuery);

  const debouncedQuery = useDebounce(localQuery, { wait: 350 });

  useEffect(() => {
    if (debouncedQuery) {
      setSearchQuery(debouncedQuery);
    } else if (expanded) {
      setSearchQuery(null);
    }
  }, [debouncedQuery, expanded, setSearchQuery]);

  const handleExpand = useCallback(() => {
    setExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  }, []);

  const handleCollapse = useCallback(() => {
    setExpanded(false);
    setLocalQuery('');
    setSearchQuery(null);
  }, [setSearchQuery]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCollapse();
      }
    },
    [handleCollapse],
  );

  if (!expanded) {
    return <ActionIcon icon={SearchIcon} onClick={handleExpand} />;
  }

  return (
    <Input
      allowClear={{ clearIcon: <XIcon size={14} /> }}
      onChange={(e) => setLocalQuery(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder={t('FileManager.search.placeholder')}
      prefix={<SearchIcon size={14} />}
      ref={inputRef}
      size="small"
      style={{ width: 200 }}
      value={localQuery}
    />
  );
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
