<style scoped></style>
<template>

    <div class="container p-3">
        <img src="/src/assets/images/logo.png " class="w-50">
        <h1 class="mt-5">Registrierung</h1>
        <strong> Bitte registrieren Sie sich.</strong>
        <form class="mt-5 row text-primary">
            <div class="form-group col-6">
                <label for="titel" class="form-label">Titel</label>
                <input type="text" class="form-control" id="inputTitel">
            </div>
            <div class=" form-group col-6">
                <label for="titelSuffix" class="form-label">Titel Suffix</label>
                <input type="text" class="form-control" id="inputtitelSuffix">
            </div>
            <!-- Vorname and Nachname -->
            <div class=" form-group col-6">
                <label for="vorname" class="form-label">Vorname*</label>
                <input type="text" class="form-control" id="inputVorname">
            </div>
            <div class=" form-group col-6">
                <label for="nachname" class="form-label">Nachname*</label>
                <input type="text" class="form-control" id="inputNachname">
            </div>

            <!-- Straße/Hausnummer -->
            <div class=" form-group col-12">
                <label for="adress" class="form-label">Straße/Hausnummer*</label>
                <input type="text" class="form-control" id="inputAdress">
            </div>

            <!-- PLZ and Ort -->
            <div class=" form-group col-6">
                <label for="plz" class="form-label">PLZ*</label>
                <input type="text" class="form-control" id="inputPLZ">
            </div>
            <div class=" form-group col-6">
                <label for="ort" class="form-label">Ort*</label>
                <input type="text" class="form-control" id="inputOrt">
            </div>

            <div class=" form-group col-12">
                <label for="land" class="form-label">Land*</label>
                <input type="text" class="form-control" id="inputLand">
            </div>

            <!-- Geburtsdatum -->
            <div class=" form-group col-md-6">
                <label for="geburtsdate" class="form-label">Geburtsdatum*</label>
                <input type="date" class="form-control" id="inputDate">
            </div>

            <!-- Geschlecht -->
            <div class=" form-group col-md-6">
                <label for="geschlecht" class="form-label">Geschlecht*</label>
                <select id="inputGeschlecht" class="form-select">
                    <option selected>Bitte wählen...</option>
                    <option value="m">Männlich</option>
                    <option value="w">Weiblich</option>
                    <option value="div">Diverse</option>
                </select>
            </div>

            <!-- Sozialversicherungsnummer -->
            <div class=" form-group col-12">
                <label for="svnr" class="form-label">Sozialversicherungsnummer*</label>
                <input type="text" class="form-control" id="inputsvnr">
            </div>

            <!-- Email and Emailbestätigung -->
            <div class=" form-group col-md-6">
                <label for="email" class="form-label">Email*</label>
                <input type="email" class="form-control" id="inputEmail">
            </div>
            <div class=" form-group col-md-6">
                <label for="emailsec" class="form-label">Email Bestätigung*</label>
                <input type="email" class="form-control" id="inputEmailsec">
            </div>

            <!-- Checkbox -->
            <div class="col-md-6">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1">
                    <label class="form-check-label mb-2" for="gridCheck1">
                        Die App darf mir bei Bedarf von
                        Hilfeleistungen eine Pushnotifikation
                        schicken.
                    </label>
                </div>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck2">
                    <label class="form-check-label mb-2" for="gridCheck2">
                        Ich stimme zu, im Krisenfall meinen Standort
                        freizugeben
                    </label>
                </div>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck3">
                    <label class="form-check-label mb-1" for="gridCheck3">
                        Mit der Registrierung stimme ich der
                        Erhebung und Verarbeitung meiner
                        personenbezogenen Daten zum Zwecke
                        der Ausstellung und Evidenzhaltung des
                        digitalen österreichischen Nachweises zu.
                        Die Einwilligung ist jederzeit widerrufbar.
                        Nähere Informationen gem. Art. 13 DSGVO
                        finden sie in unserer Datenschutzerklärung.
                    </label>
                </div>
            </div>
            
            <div class="d-flex gap-2 justify-content-end ">
                <router-link to="/login" class="btn btn-outline-primary" type="submit">Abbrechen</router-link>
                <router-link type="submit" class="btn btn-primary text-light" to="/onboarding"
                    aria-current="page">Registrieren</router-link>
            </div>
        </form>
    </div>


</template>