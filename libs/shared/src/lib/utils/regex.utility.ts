export class RegexUtility {
    public static passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/;
    public static phoneRegex = /^(6[0-9]{1,2})\d{6,8}/;
    public static emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
}
  
