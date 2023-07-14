//where the function is keyup and input is the targetted element
<script>
    $(document).on('keyup', 'input', function() {
        var $this = $(this);
        $this.val($this.val().replace(/[^\d.]/g, ''));
    });
</script>
