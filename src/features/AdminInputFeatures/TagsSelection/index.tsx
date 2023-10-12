import React from "react";
import styles from "../SelectSeries/selectSeries.module.scss";

function TagsField({
  availableTags,
  selectedTags,
  newTag,
  handleSelectTag,
  handleNewTagChange,
  addNewTag,
  removeTag,
}) {
  return (
    <div className={styles.inputFieldsetSynopsis}>
      <label className={styles.inputLabel}>TAGS</label>
      <select
        multiple
        className={styles.inputSelectMulti}
        id="tags"
        name="tags"
        value={selectedTags}
        onChange={handleSelectTag}
        required
      >
        {availableTags.map((tag) => (
          <option key={tag} value={tag} className={styles.inputSelectOption}>
            {tag}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={newTag}
        onChange={handleNewTagChange}
        placeholder="Type a new tag"
      />
      <button onClick={addNewTag}>Add Tag</button>
      {selectedTags.length === 0 && (
        <div style={{ color: "red" }} className={styles.errorMessage}>
          <p>Please select at least one tag</p>
        </div>
      )}
      <div>
        <p>Selected Tags:</p>
        <ul>
          {selectedTags.map((tag) => (
            <li key={tag}>
              {tag} <button onClick={() => removeTag(tag)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TagsField;
