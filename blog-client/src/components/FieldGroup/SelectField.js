/**
 * Modules
 */
import React from 'react';

/**
 * Components
 */
import { FormControl } from 'react-bootstrap';

export default function SelectField({ placeholder, items, fieldToList, defaultValue, ...props }) {
  return (
    <FormControl
      componentClass="select"
      {...props}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {
        (Array.isArray(items))
        ? (
          items.map((item, itemKey) => {
            const selected = itemKey === defaultValue ? 'selected' : null;

            return (
              <option
                key={itemKey}
                value={itemKey}
                selected={selected}
              >
                { item }
              </option>
            );
          })
        )
        : (
          Object.keys(items).map((itemId) => {
            const item = items[itemId];
            const selected = item.id === defaultValue ? 'selected' : null;

            return (
              <option
                key={item.id}
                value={item.id}
                selected={selected}
              >
                { item[fieldToList] }
              </option>
            );
          })
        )
      }
    </FormControl>
  );
}
