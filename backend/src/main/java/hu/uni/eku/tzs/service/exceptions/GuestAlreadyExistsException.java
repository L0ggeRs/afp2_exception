package hu.uni.eku.tzs.service.exceptions;

public class GuestAlreadyExistsException extends Exception {
    public GuestAlreadyExistsException() {
    }

    public GuestAlreadyExistsException(String message) {
        super(message);
    }

    public GuestAlreadyExistsException(String message, Throwable cause) {
        super(message, cause);
    }

    public GuestAlreadyExistsException(Throwable cause) {
        super(cause);
    }

    public GuestAlreadyExistsException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}