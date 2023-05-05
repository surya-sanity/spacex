import { ChangeEvent, useEffect, useState } from 'react';
import { ReactComponent as Search } from '../Assets/Icons/search.svg';
import useDebounce from '../Hooks/useDebounce';

interface SearchBarPropType {
  searchFunction: (query: string) => void
  placeHolder?: string
  className?: string
}

const SearchBar = (props: SearchBarPropType) => {
  const { className, searchFunction, placeHolder } = props;

  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    searchFunction(debouncedValue)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute top-0 bottom-0 w-6 h-6 my-auto left-3" />
      <input
        onChange={handleChange}
        type="text"
        placeholder={placeHolder}
        className="w-full py-3 pl-12 pr-4 border rounded-md outline-none  bg-light dark:bg-dark"
      />
    </div>
  );
}

export default SearchBar