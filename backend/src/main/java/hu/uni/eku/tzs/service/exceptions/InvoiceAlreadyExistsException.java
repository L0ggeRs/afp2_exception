package hu.uni.eku.tzs.service.exceptions;

public class InvoiceAlreadyExistsException extends Exception {
    public InvoiceAlreadyExistsException() {
    }

    public InvoiceAlreadyExistsException(String message) {
        super(message);
    }

    public InvoiceAlreadyExistsException(String message, Throwable cause) {
        super(message, cause);
    }

    public InvoiceAlreadyExistsException(Throwable cause) {
        super(cause);
    }

    public InvoiceAlreadyExistsException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}