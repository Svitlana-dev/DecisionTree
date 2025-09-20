import css from "./ScreenshotInput.module.css";

export default function ScreenshotInput({ onPick, previewUrl }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onPick({ file, url: URL.createObjectURL(file) });
    }
  };

  return (
    <div className={css.wrap}>
      <input
        type="file"
        accept="image/*"
        id="screenshotInput"
        className={css.hiddenInput}
        onChange={handleFileChange}
      />

      <label htmlFor="screenshotInput" className={css.btn}>
        Додати скріншот
      </label>

      {previewUrl && (
        <div className={css.preview}>
          <img src={previewUrl} alt="screenshot preview" />
        </div>
      )}
    </div>
  );
}
