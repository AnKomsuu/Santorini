import { Link } from "react-router-dom";

/**
 * Переиспользуемый компонент кнопки
 * @param {Object} props
 * @param {React.ReactNode} props.children - Содержимое кнопки
 * @param {string} props.className - Дополнительные классы
 * @param {'primary' | 'outline'} props.variant - Вариант стиля кнопки
 * @param {string} props.to - Путь для Link (если указан, используется Link вместо button)
 * @param {Function} props.onClick - Обработчик клика (для button)
 * @param {string} props.type - Тип кнопки (button, submit, reset)
 */
const Button = ({
  children,
  className = "",
  variant = "primary",
  to,
  onClick,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "uppercase font-bold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-x-2";

  const variantClasses = {
    primary: "bg-bg-blue text-white hover:bg-blue-600",
    outline:
      "border-2 border-theme-blue text-theme-blue hover:bg-bg-blue hover:text-white",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  // Если передан to, используем Link
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // Иначе используем button
  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;

