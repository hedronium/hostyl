module.exports = `
_               _         _ 
| |             | |       | |
| |__   ___  ___| |_ _   _| |
| '_ \\ / _ \\/ __| __| | | | |
| | | | (_) \\__ \\ |_| |_| | |
|_| |_|\\___/|___/\\__|\\__, |_|
                      __/ |  
                     |___/   V 1.0.0

General Usage:
    hostyl <command> [<host> [<ip>]] [-f|--file=<filename>]

Notes:
    - Hostyle will use the file 'project.hosts' by default.

Commands:
    hostyl up [-f|--file=<filename>]
        Applying the hosts file to system.
        Note: MUST RUN AS ROOT.

    hostyl down
        Rolls back the system hosts file to original.
        Note: MUST RUN AS ROOT.

    hostyl status
        Chekcs to see if hostyl is engaged currently.

    hostyl view
        Lists all the host mappings of the current system.



    hostyl set <host> <ip> [-f|--file=<filename>]
        Maps the provided host to the specified IP Address
        for the specified (or default) hosts file in the directory.
    
        Note:
            - Does not apply hosts file. Use 'hostyl up' to apply.
            - Creates the file if it does not exist.


    hostyl remove <host> [-f|--file=<filename>]
        Removes the mapping for the specified host from the
        specified (or default) hosts file in the directory.

        Note: Does not apply hosts file. Use 'hostyl up' to apply.

    hostyl list [-f|--file=<filename>]
        Lists all the host mappings of the specified (or defult) file
        in the directory.
`;