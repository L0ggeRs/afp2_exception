package hu.uni.eku.tzs.service.exceptions;

public class ComplexNumberAlreadyExistsException extends Exception {

    public ComplexNumberAlreadyExistsException() {
    }

    public ComplexNumberAlreadyExistsException(String message) {
        super(message);
    }

    public ComplexNumberAlreadyExistsException(String message, Throwable cause) {
        super(message, cause);
    }

    public ComplexNumberAlreadyExistsException(Throwable cause) {
        super(cause);
    }

    public ComplexNumberAlreadyExistsException(
            String message,
            Throwable cause,
            boolean enableSuppression,
            boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
